const express = require('express');
const axios = require('axios');

class ClassBRestController {
    constructor() {
        this.port = process.env.PORT || 3022;
        this.services = {
           // Books: 'http://localhost:3034/books',
            DVDs: 'http://localhost:3035',
            //Laptops: 'http://localhost:3036/laptops'
        };

        this.app = express();
        this.app.use(express.json());

        const router = express.Router();
        router.get('/:service/all/location', this.getAllItems.bind(this));
        router.get('/:service/team', this.getTeamInfo.bind(this));

        this.app.use('/', router);
    }

    start() {
        this.app.listen(this.port, () => console.log(`Mid-Tier Service B running on port ${this.port}`));
    }

    async getAllItems(req, res) {
        const { service } = req.params;
        const { location } = req.query;
        try {
            const response = await axios.get(`${this.services[service]}/all/location`, { params: { location } });
            res.json(response.data);

           
        } catch (err) {
            console.error(`Error on GET all locations for ${service}: ${err}`);
            res.status(500).json({ error: err.message });
        }
    }

    async getTeamInfo(req, res) {
        const { service } = req.params;
        try {
            const response = await axios.get(`${this.services[service]}/team`);
            res.json(response.data);
        } catch (err) {
            console.error(`Error on GET team info for ${service}: ${err}`);
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = ClassBRestController;

if (require.main === module) {
    const api = new ClassBRestController();
    api.start();
}