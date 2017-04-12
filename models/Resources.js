/**
 * Created by zhanghaoyi on 17/4/12.
 */
/* 资源模板 */
import mongoose from 'mongoose';
import db from '../config/mongo';

//一个用户模型
const ResourcesSchema = new mongoose.Schema({
    name: { type: String },
    createTime : { type: Date, default: Date.now },
    description: { type: String},
    type: { type: String },
    password: { type: String },
    createUser: { type:String },
});
//创建Model
export default db.model("resources", ResourcesSchema);