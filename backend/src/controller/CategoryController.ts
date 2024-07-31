import { Request, Response } from 'express';
import { Category } from '../models/Category';


export class CategoryController {

    async getAllCategories(req: Request, res: Response): Promise<void> {
        try {
            const categories = await Category.findAll();
            res.json(categories);
        } catch (error) {   
            res.status(500).json({ error: 'An error occurred while fetching categories' });
        }
    }

    async getCategoryById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const category = await Category.findOne({ where: { id } });
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching the category' });
        }
    }

    async createCategory(req: Request, res: Response): Promise<void> {  
        try {
            const { name } = req.body;
            const category = await Category.create({ name });
            res.status(201).json(category);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the category' });
        }   
    }

    async updateCategory(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const category = await Category.update({ name }, { where: { id } });
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the category' });
        }
    }

    async deleteCategory(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const category = await Category.destroy({ where: { id } });
            res.status(200).json(category); 
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the category' });    
        }
    }
}