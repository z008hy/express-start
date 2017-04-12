/**
 * Created by zhanghaoyi on 17/4/12.
 */
import express from 'express';
import ResourcesDao from '../daos/ResourcesDao';

const router = express.Router();

router.get('/testResources', function(req, res, next) {
    res.json( true );
});
router.post('/resources', (req, res, next)=>{
    //获取参数，验证参数
    const  name = req.param('name');
    const  createTime = req.param('createTime');
    const  description = req.param('description');
    const  type = req.param('type');
    const  password = req.param('password');
    const  createUser = req.param('createUser');
    //执行操作，返回前端
    ResourcesDao.save({ name, createTime, description, type, password, createUser}).then( ( result ) => {
        res.json( result );
    });
});
router.get('/resources', (req, res, next)=>{
    //执行操作，返回前端
    ResourcesDao.find({}).then( ( result ) => {
        res.json( result );
    });
});
module.exports = router;