-- ===========================
-- DROP TABLES
-- ===========================
-- Drop in reverse order of dependencies
-- to avoid foreign key errors.

DROP TABLE IF EXISTS activity_logs;
DROP TABLE IF EXISTS task_labels;
DROP TABLE IF EXISTS attachments;
DROP TABLE IF EXISTS task_comments;
DROP TABLE IF EXISTS project_members;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS team_members;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS labels;
DROP TABLE IF EXISTS users;

-- ===========================
-- DROP TYPES
-- ===========================
-- Can only be dropped after the tables
-- that use them are gone.

DROP TYPE IF EXISTS user_role;
DROP TYPE IF EXISTS task_status;
DROP TYPE IF EXISTS task_priority;
-- ===========================
-- SAFE ENUM CREATION
-- ===========================

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
        CREATE TYPE user_role AS ENUM ('ADMIN', 'MANAGER', 'MEMBER');
    END IF;
END$$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'task_status') THEN
        CREATE TYPE task_status AS ENUM ('TODO', 'IN_PROGRESS', 'IN_REVIEW', 'COMPLETED', 'CANCELLED');
    END IF;
END$$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'task_priority') THEN
        CREATE TYPE task_priority AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');
    END IF;
END$$;


-- ===========================
-- USERS
-- ===========================

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role user_role DEFAULT 'MEMBER',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);


-- ===========================
-- TEAMS
-- ===========================

CREATE TABLE IF NOT EXISTS teams (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  created_by BIGINT REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW()
);


-- ===========================
-- TEAM MEMBERS
-- ===========================

CREATE TABLE IF NOT EXISTS team_members (
  id BIGSERIAL PRIMARY KEY,
  team_id BIGINT NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  joined_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (team_id, user_id)
);


-- ===========================
-- PROJECTS
-- ===========================

CREATE TABLE IF NOT EXISTS projects (
  id BIGSERIAL PRIMARY KEY,
  team_id BIGINT REFERENCES teams(id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  created_by BIGINT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);


-- ===========================
-- PROJECT MEMBERS
-- ===========================

CREATE TABLE IF NOT EXISTS project_members (
  id BIGSERIAL PRIMARY KEY,
  project_id BIGINT REFERENCES projects(id) ON DELETE CASCADE,
  user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
  assigned_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (project_id, user_id)
);


-- ===========================
-- TASKS
-- ===========================

CREATE TABLE IF NOT EXISTS tasks (
  id BIGSERIAL PRIMARY KEY,
  project_id BIGINT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  status task_status DEFAULT 'TODO',
  priority task_priority DEFAULT 'MEDIUM',
  assigned_to BIGINT REFERENCES users(id),
  due_date DATE,
  created_by BIGINT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);


-- ===========================
-- TASK COMMENTS
-- ===========================

CREATE TABLE IF NOT EXISTS task_comments (
  id BIGSERIAL PRIMARY KEY,
  task_id BIGINT NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);


-- ===========================
-- ATTACHMENTS
-- ===========================

CREATE TABLE IF NOT EXISTS attachments (
  id BIGSERIAL PRIMARY KEY,
  task_id BIGINT REFERENCES tasks(id) ON DELETE CASCADE,
  file_url TEXT NOT NULL,
  uploaded_by BIGINT REFERENCES users(id),
  uploaded_at TIMESTAMP DEFAULT NOW()
);


-- ===========================
-- LABELS
-- ===========================

CREATE TABLE IF NOT EXISTS labels (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  color VARCHAR(20) DEFAULT '#000000'
);


-- ===========================
-- TASK LABELS
-- ===========================

CREATE TABLE IF NOT EXISTS task_labels (
  id BIGSERIAL PRIMARY KEY,
  task_id BIGINT NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  label_id BIGINT NOT NULL REFERENCES labels(id) ON DELETE CASCADE,
  UNIQUE (task_id, label_id)
);


-- ===========================
-- ACTIVITY LOGS
-- ===========================

CREATE TABLE IF NOT EXISTS activity_logs (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES users(id),
  project_id BIGINT REFERENCES projects(id),
  task_id BIGINT REFERENCES tasks(id),
  action VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);


-- ===========================
-- INDEXES
-- ===========================

CREATE INDEX IF NOT EXISTS idx_tasks_project_id ON tasks(project_id);
CREATE INDEX IF NOT EXISTS idx_tasks_assigned_to ON tasks(assigned_to);
CREATE INDEX IF NOT EXISTS idx_task_comments_task_id ON task_comments(task_id);
CREATE INDEX IF NOT EXISTS idx_proj_members_user ON project_members(user_id);
CREATE INDEX IF NOT EXISTS idx_team_members_user ON team_members(user_id);
