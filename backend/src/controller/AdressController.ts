import { Request, Response } from 'express';
import { Address } from '../models/Address';

export class AddressController {
    async getAllAddresses(req: Request, res: Response): Promise<void> {
        try {
            const addresses = await Address.findAll();
            res.json(addresses);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching addresses' });
        }
    }

    async getAddressById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const address = await Address.findOne({ where: { id } });
            res.json(address);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching the address' });
        }
    }

    async createAddress(req: Request, res: Response): Promise<void> {
        try {
            const { street, city, state, zip_code, user_id   } = req.body;
            const address = await Address.create({
                street, city, state, zip_code, user_id
             });
            res.status(201).json(address);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the address' });
        }
    }

    async updateAddress(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { street, city, state, zip_code, user_id  } = req.body;
            const address = await Address.update({ street, city, state, zip_code, user_id }, { where: { id } });
            res.status(200).json(address);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the address' });
        }
    }

    async deleteAddress(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const address = await Address.destroy({ where: { id } });
            res.status(200).json(address);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the address' });
        }
    }
}
