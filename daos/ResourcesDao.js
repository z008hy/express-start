/**
 * Created by zhanghaoyi on 17/4/12.
 */
import ResourcesModel from '../models/Resources';

module.exports = {
    /**
     * 添加数据
     * @param  {[type]} data 需要保存的数据对象
     */
    save(data) {
        return new Promise((resolve, reject) => {
            //model.create(保存的对象,callback)
            ResourcesModel.create(data, (error, doc) => {
                if(error){
                    reject(error)
                }else{
                    resolve(doc)
                }
            });
        });
    },
    find(data, fields, options) {
        return new Promise((resolve, reject) => {
            //model.find(需要查找的对象(如果为空，则查找到所有数据), 属性过滤对象[可选参数], options[可选参数], callback)
            ResourcesModel.find(data, fields, options, (error, doc) => {
                if(error){
                    reject(error)
                }else{
                    resolve(doc)
                }
            })
        })
    },
    findOne(data) {
        return new Promise((resolve, reject) => {
            //model.findOne(需要查找的对象,callback)
            ResourcesModel.findOne(data, (error, doc) => {
                if(error){
                    console.log("error",error);
                    reject(error)
                }else{
                    console.log(doc);
                    resolve(doc)
                }
            })
        })
    },
    findById(data) {
        return new Promise((resolve, reject) => {
            //model.findById(需要查找的id对象 ,callback)
            ResourcesModel.findById(data, (error, doc) => {
                if(error){
                    reject(error)
                }else{
                    resolve(doc)
                }
            })
        })
    },
    update(conditions, update) {
        return new Promise((resolve, reject) => {
            //model.update(查询条件,更新对象,callback)
            ResourcesModel.update(conditions, update, (error, doc) => {
                if(error){
                    reject(error)
                }else{
                    resolve(doc)
                }
            })
        })
    },
    remove(conditions) {
        return new Promise((resolve, reject) => {
            //model.update(查询条件,callback)
            ResourcesModel.remove(conditions, (error, doc) => {
                if(error){
                    reject(error)
                }else{
                    resolve(doc)
                }
            })
        })
    }
}