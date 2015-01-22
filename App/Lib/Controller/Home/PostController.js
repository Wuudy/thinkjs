/**
 * Created by pc on 2015/1/14.
 */
module.exports = Controller({
    listAction: function() {
        var self = this;
        var listPromise = D('Post').select();
        this.assign('list', listPromise);
        this.display();
    },
    detailAction: function() {
        var id = this.get('id') | 0;
        if(!id) {
            return this.error(100,'params error');
        }
        var detailPromise = D('Post').where({id:id}).find();
        this.assign('listDetail', detailPromise);
        this.display();
    },
    addAction: function(){
        var self = this;
        if(!this.isAjax()){
            return this.error(100,"not ajax");
        }
        var title = this.post('title');
        var content = this.post('content');
        D('Post').where({id:3}).find().then(function(data) {
            self.json(data);
        });
    }
})