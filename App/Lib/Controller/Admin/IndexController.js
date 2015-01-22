/**
 * Created by pc on 2015/1/16.
 */
module.exports = Controller('Admin/BaseController',{
    indexAction:function(){
        var userInfo = this.assign('userinfo');
        this.json(userInfo);
    },
    loginAction:function(){
        if(this.isGet()){
            return this.display();
        };
        var username = this.post('username');
        var password = this.post('password');
        var self = this;
        if(username === "woody_wu" && password === "123456"){
            return this.session('userinfo',{username:username}).then(function(){
                self.redirect('/admin/');
            })
        }
        return this.error(101,"用户名密码错误");
    }
})