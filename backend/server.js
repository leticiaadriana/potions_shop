import express from 'express';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
});

const Pocao = sequelize.define('Pocao', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: DataTypes.STRING, allowNull: false },
    descricao: {type: DataTypes.TEXT, allowNull: false},
    imagem: {type: DataTypes.STRING, allowNull: false},
    preco: {type: DataTypes.FLOAT, allowNull: false},
});



async function initDB(){
    try {
        await sequelize.sync({force: true});
        await Pocao.bulkCreate(pocoes);
        console.log('Banco de dados inicializado com sucesso!');
    } catch (error) {
        console.error('Erro ao inicializar banco de dados: ', error);
    }
}




app.get('/api/pocoes', async(req, res) => {
    try {
        const pocoes = await Pocao.findAll();
        res.json(pocoes);
    } catch (error) {
        res.status(500).json({ error: 'Error ao buscar poções'});
    }
});

app.get('/api/pocoes/:id', async(req, res) => {
    try {
        const pocao = await Pocao.findByPk(req.params.id);
        if(pocao) {
            res.json(pocao);
        }else {
            res.status(404).json({error: 'Poção não encontrada'});
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar poção'});
    }
});



app.post('/api/pocoes', async(req, res) => {
    try {
        const {nome, descricao, imagem, preco} = req.body;

        // tratar erro TODO

        const novaPocao = await Pocao.create({
            nome,
            descricao,
            imagem,
            preco: parseFloat(preco),
        });

        res.status(201).json(novaPocao);
    } catch (error) {
        res.status(500).json({error: 'Erro ao cadastrar poção'});
    }
});

app.delete('/api/pocoes/:id', async(req, res) => {
    try {
        const pocao = await Pocao.findByPk(req.params.id);

        // TODO tratar erro
        

        await pocao.destroy();
        res.json({message: 'Poção removida com sucesso'});
    } catch (error) {
        res.status(500).json({error: 'Erro ao remover poção'});
    }
});

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log(`Api disponível em http://localhost:${PORT}/api/pocoes`);
    });
});