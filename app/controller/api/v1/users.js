const model = require('../../../model/users')


module.exports = {
    async get(req, res){
        const { search, page, limit } = req.query;
        console.log(req.query);
        let result = await model.get(search, page, limit)
        if(!result.length) {
            return res.status(200).json({ 
                status: 'success', 
                code: 200, 
                message: 'Data Empty'
            })
        }
        
        return res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success!',
            data: result
        })
    },

    async getById(req, res){
        if(!req.params.id) res.status(400).json({ 
            status: 'fail', 
            code: 400, 
            message: 'Bad Request! id is required',
        })
    
        const user = await model.getById(req.params.id)
    
        res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success!',
            data: user
        })
    },
    async create(req, res){
        const user = await model.create(req.body);

        res.status(201).json({ 
            status: 'success', 
            code: 200, 
            message: 'Data ditambahkan!',
            data: user
        })
    },
    async update(req, res){
        const user = await model.update({
            ...req.body, 
            id:req.params.id
        });

        res.status(201).json({ 
            status: 'success', 
            code: 200, 
            message: 'Data diupdate!',
            data: user
        })
    },
    async destroy(req, res){
        if(!req.params.id) res.status(400).json({ 
            status: 'fail', 
            code: 400, 
            message: 'Bad Request! id is required',
        })
    
        const user = await model.delete(req.params.id)
    
        res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success Data terhapus!',
        })
    },
}