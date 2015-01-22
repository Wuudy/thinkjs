/**
 * Created by pc on 2015/1/16.
 */
var moment = require('moment');
module.exports = Controller('Admin/BaseController',{
    addAction:function(){
        if(this.isGet()){
            this.display();
        }
        var title = this.post('title');
        var content = this.post('content');
        var self = this;
        if(title && content){
            return D('Post').add({
                title:title,
                content:content,
                creative_time:moment().format('YYYY:MM:DD HH:MM:SS'),
                update_time:moment().format('YYYY:MM:DD HH:MM:SS')
            }).then(function(insertId){
                return self.success(insertId);
            }).catch(function(err){
                return self.error(102,'params error');
            })
        }
    }
})