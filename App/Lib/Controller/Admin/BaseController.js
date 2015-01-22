/**
 * Created by pc on 2015/1/16.
 */
module.exports = Controller({
    __before:function(){
        return this.checkUserLogin();
    },
    checkUserLogin:function(){
        var self = this;
        if(this.http.action === "login"){
            return;
        }
        return this.session('userinfo').then(function(data){
            if(isEmpty(data)){
                if(self.isAjax()){
                    return self.error(403,'not login');
                }
                return self.redirect('/admin/index/login');
            };
            self.assign('userinfo',data);
        })
    }
})