import { BrandInterface } from "../models/brand.models.js";
import updateBrandRepositories from "../repositories/brands/updateBrand.repositories.js";

const updateBrandService=async(id:string,requestedData:BrandInterface)=>{
    try {
        const data=await updateBrandRepositories(id,requestedData)
        return data
    } catch (error) {
        const err = error as Error;
    throw new Error(err.message);
    }
}

export default updateBrandService;