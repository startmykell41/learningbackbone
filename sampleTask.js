//$(function() {

    TaskList = Backbone.Collection.extend({
        initialize: function() {
        }
    });

    TaskView = Backbone.View.extend({
        
		events: {
            'click #add-input': 'getTask'
        },

        initialize: function() {
            var thisView = this;
            this.tasklist = new TaskList;
            _.bindAll(this, 'render');
            this.tasklist.bind("add", function(model) {
                thisView.render(model);
            })
        },

        getTask: function() {
            var task_name = $('#input').val();
            this.tasklist.add({ name: task_name });
        },

        render: function(model) {
            $("#task-list").append("<input>" + 
               model.get("name") + "</input><input type='button' value='Add'></input>");
        }

    });

    var view = new TaskView({ el: 'listView' });
//});