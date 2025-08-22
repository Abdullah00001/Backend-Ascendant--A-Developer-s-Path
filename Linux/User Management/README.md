# User Management

### Introduction to user management

Linux is multi-user operating system.That means we can operate a system simultaneously wit multiple role and permissions.Proper user management ensure security,access and integrity of an system.

key files that involve in user management:

- `/etc/passwd` - Store user account details.
- `/etc/shadow` - Store user encrypted password.
- `/etc/group` - Store group information
- `/etc/gshadow` - Store secure group information

### Creating user in linux

We can create user two way.

- #### useradd (built in command)

  Its a basic command who didn't take any argument to create an user.Its create user without creating password and home directory.

  ```
  useradd jhondoe
  ```

- #### adduser (3rd party command)

  Its a interactive command that take various argument as input while creating user.Like password,full name,contacts etc.And Interesting think is its create home directory for the user.

  ```
  useradd jhondoe
  ```

### Password Manipulation

- #### Add password to a user as root or admin

  ```
  sudo passwd jhondoe
  ```

  - Sets (or resets) the password for jhondoe.
  - Root does not need the old password, it directly sets a new one.
  - Commonly used when creating a new user or resetting a forgotten password.

- #### Change password as user

  ```
  passwd
  ```

  - When run without a username, it changes your own password.
  - Prompts:

    1. Current password (for verification).
    2. New password.
    3. Confirm new password.

  - If the new password = old password → it will reject it (password unchanged).

- ⚠️ Note:
  ```
  passwd jhondoe
  ```
  - If run as the user → you’ll get "passwd: Permission denied" (you can only change your own password).
  - If run as root → you can change any user’s password (without knowing the current one).

### Enforce Password Policy

- #### Set password expiry:
  ```
  chage -M 90 jhondoe
  ```
  Here jhon doe's password will be valid for 90 days from password creation date.There us another helpful command and its best practice if we set expiry of user password.Suppose we set user password expiry but user will forgot to change before expiry.To solve this problem we set warning before the password expired with this command
  #### Set Warning Notification
  ```
    chage -W 5 jhondoe
  ```
- #### Lock user account:
  ```
  passwd -l jhondoe
  ```
  This command will be locked jhon doe's account.So that he will not logedin in the system.
- #### Unlock user Account:
  ```
  passwd -u jhondoe
  ```
  This command will be unlocked jhon doe's account.

### Deleting user in linux

- Delete user without delete there home directory

  ```
  userdel jhondoe
  ```

- Delete user with there home directory

  ```
  userdel -r jhondoe
  ```
