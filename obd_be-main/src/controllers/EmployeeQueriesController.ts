import { Request, Response } from 'express';
import * as employeeQueriesService from '../services/employeeQueriesService';

export const getAllEmployeeQueries = async(req:Request, res:Response) => {
    try {
        const queries = await employeeQueriesService.getAllEmployeeQueries()
        // // Debugging
        // console.log(queries); 
        res.json(queries)
    } catch (error) {
        // // Debugging
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch employee queries' });
    }
}