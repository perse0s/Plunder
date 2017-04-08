var a = tabris.ui.statusBar;

a.displayMode = 'hide'
a.background = '#ff0000'
a.theme = 'dark'


var nav = new tabris.NavigationView({
  
  left:0,right:0,
  
  actionColor: '#ffffff',
  actionTextColor: '#ffffff',
  animated : true,
  //drawerActionVisible: true,
  titleTextColor: '#ffffff',
  toolbarColor: '#ff0000',
  toolbarVisible:true
  
}).appendTo(tabris.ui.contentView);





//homepage
var home  = new tabris.Page({
  
  title: 'Assignments'
  
}).appendTo(nav)








var task1info = ['Math', 'April',99, '21','never']

var task1 = new tabris.Composite({
  
  left:0,right:0,top:20,height:40,
  background: '#ffdddd'
  
}).appendTo(home)

var task1name = new tabris.TextView({
  
  left:20,top:10,
  text: task1info[0]
  
}).appendTo(task1)

var task1date = new tabris.TextView({
  
  right:100,top:10,
  text: task1info[1] + ' ' + task1info[3],
  alignment:'center'
  
}).appendTo(task1)

var task1progress = new tabris.ProgressBar({
  left:0,right:0,top:30,
  state: 'error',
  selection:task1info[2]
  
}).appendTo(task1)

new tabris.Button({
  
  right:10,top:0,
  text: 'Edit'
  
}).on('select', function(){
  
  
  var edit1 = new tabris.Page({
    
    title: task1info[0]
    
  }).appendTo(nav)
  
    var name1 = new tabris.TextInput({
    
    left:20,right:20,top:20, height:40,
    
    borderColor: '#ff0000',
    message: 'Assignment',
    text: task1info[0]
    
  }).appendTo(edit1);
  
  var month1 = new tabris.Picker({
    
    left:20,width:100,top:80,height:40,
    
    borderColor:'#ff0000',
    items: ['January', 'Febuary', 'March', 'April','May','June','July','August','September','October','November','December'],
	selection: task1info[1]
    
  }).appendTo(edit1)
  
  var day1 = new tabris.Picker({
    
    left:140,width:100,top:80,height:40,
    borderColor:'#ff0000',
    items: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    selection: task1info[3]

    
  }).appendTo(edit1)
  
var progressheading = new tabris.TextView({
    
    left:20,top:120,
    text:'Progress: ' + task1info[2] + '%'
    
  }).appendTo(edit1)
  
  var progress1 = new tabris.Slider({
    
    left:5,right:5,top:140,height:40,
    selection: task1info[2]
    
  }).on('change:selection', function(){
    
    progressheading.text = 'Progress: ' + progress1.selection + '%'
    
  }).appendTo(edit1)
  
// var notificationsheading = new tabris.TextView({
    
//     left:20, top: 180,
   //  text: ‘Notifications: Remind me’
    
//  }).appendTo(edit1)
  
  /*var task1notifications = new tabris.Picker({
    
    left:180, top: 167,
    borderColor:'#ff0000',
    items: ['never', 'every day', 'every 2 days', 'every week', 'every 2 weeks'],
    selection: task1info[4]
    
  }).appendTo(edit1)
  */
  var save1 = new tabris.Button({
    
    right:30,top:400,
    text: 'Save'
    
  }).on('select', function(){
    
    task1info[0] = name1.text
    task1info[1] = month1.selection
    task1info[2] = progress1.selection
    task1info[3] = day1.selection
    //task1info[4] = task1notifications.selection
    edit1.dispose()
    
  }).appendTo(edit1)
  
  var cancel1 = new tabris.Button({
    
    left:30,top:400,
    text: 'Cancel'
    
  }).on('select', function(){
    

    edit1.dispose()
    
  }).appendTo(edit1)

  
}).appendTo(task1)

home.on('appear',function(){
  
  task1name.text     = task1info[0]
  task1date.text     = task1info[1] + ' ' + task1info[3]
  task1progress.selection = task1info[2]

  
})


var task2info = ['Science', 'March',13, '14','never']

var task2 = new tabris.Composite({
  
  left:0,right:0,top:70,height:40,
  background: '#ffdddd'
  
}).appendTo(home)

var task2name = new tabris.TextView({
  
  left:20,top:10,
  text: task2info[0]
  
}).appendTo(task2)

var task2date = new tabris.TextView({
  
  right:100,top:10,
  text: task2info[1] + ' ' + task2info[3],
  alignment:'center'
  
}).appendTo(task2)

var task2progress = new tabris.ProgressBar({
  left:0,right:0,top:30,
  state: 'error',
  selection:task2info[2]
  
}).appendTo(task2)

new tabris.Button({
  
  right:10,top:0,
  text: 'Edit'
  
}).on('select', function(){
  
  
  var edit2 = new tabris.Page({
    
    title: task2info[0]
    
  }).appendTo(nav)
  
    var name2 = new tabris.TextInput({
    
    left:20,right:20,top:20, height:40,
    
    borderColor: '#ff0000',
    message: 'Assignment',
    text: task2info[0]
    
  }).appendTo(edit2);
  
  var month2 = new tabris.Picker({
    
    left:20,width:100,top:80,height:40,
    
    borderColor:'#ff0000',
    items: ['January', 'Febuary', 'March', 'April','May','June','July','August','September','October','November','December'],
	selection: task2info[1]
    
  }).appendTo(edit2)
  
  var day2 = new tabris.Picker({
    
    left:140,width:100,top:80,height:40,
    borderColor:'#ff0000',
    items: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    selection: task2info[3]

    
  }).appendTo(edit2)
  
var progressheading = new tabris.TextView({
    
    left:20,top:120,
    text:'Progress: ' + task2info[2] + '%'
    
  }).appendTo(edit2)
  
  var progress2 = new tabris.Slider({
    
    left:5,right:5,top:140,height:40,
    selection: task2info[2]
    
  }).on('change:selection', function(){
    
    progressheading.text = 'Progress: ' + progress2.selection + '%'
    
  }).appendTo(edit2)
  
//  var notificationsheading = new tabris.TextView({
    
//     left:20, top: 180,
   //  text: ‘Notifications: Remind me’
    
 // }).appendTo(edit2)
  
  /*var task2notifications = new tabris.Picker({
    
    left:180, top: 167,
    borderColor:'#ff0000',
    items: ['never', 'every day', 'every 2 days', 'every week', 'every 2 weeks'],
    selection: task2info[4]
    
  }).appendTo(edit2)
  */
  var save2 = new tabris.Button({
    
    right:30,top:400,
    text: 'Save'
    
  }).on('select', function(){
    
    task2info[0] = name2.text
    task2info[1] = month2.selection
    task2info[2] = progress2.selection
    task2info[3] = day2.selection
    //task2info[4] = task2notifications.selection
    edit2.dispose()
    
  }).appendTo(edit2)
  
  var cancel2 = new tabris.Button({
    
    left:30,top:400,
    text: 'Cancel'
    
  }).on('select', function(){
    

    edit2.dispose()
    
  }).appendTo(edit2)

  
}).appendTo(task2)

home.on('appear',function(){
  
  task2name.text     = task2info[0]
  task2date.text     = task2info[1] + ' ' + task2info[3]
  task2progress.selection = task2info[2]

  
})



var task3info = ['Reading', 'May',67, '31','never']

var task3 = new tabris.Composite({
  
  left:0,right:0,top:120,height:40,
  background: '#ffdddd'
  
}).appendTo(home)

var task3name = new tabris.TextView({
  
  left:20,top:10,
  text: task3info[0]
  
}).appendTo(task3)

var task3date = new tabris.TextView({
  
  right:100,top:10,
  text: task3info[1] + ' ' + task3info[3],
  alignment:'center'
  
}).appendTo(task3)

var task3progress = new tabris.ProgressBar({
  left:0,right:0,top:30,
  state: 'error',
  selection:task3info[2]
  
}).appendTo(task3)

new tabris.Button({
  
  right:10,top:0,
  text: 'Edit'
  
}).on('select', function(){
  
  
  var edit3 = new tabris.Page({
    
    title: task3info[0]
    
  }).appendTo(nav)
  
    var name3 = new tabris.TextInput({
    
    left:20,right:20,top:20, height:40,
    
    borderColor: '#ff0000',
    message: 'Assignment',
    text: task3info[0]
    
  }).appendTo(edit3);
  
  var month3 = new tabris.Picker({
    
    left:20,width:100,top:80,height:40,
    
    borderColor:'#ff0000',
    items: ['January', 'Febuary', 'March', 'April','May','June','July','August','September','October','November','December'],
	selection: task3info[1]
    
  }).appendTo(edit3)
  
  var day3 = new tabris.Picker({
    
    left:140,width:100,top:80,height:40,
    borderColor:'#ff0000',
    items: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    selection: task3info[3]

    
  }).appendTo(edit3)
  
var progressheading = new tabris.TextView({
    
    left:20,top:120,
    text:'Progress: ' + task3info[2] + '%'
    
  }).appendTo(edit3)
  
  var progress3 = new tabris.Slider({
    
    left:5,right:5,top:140,height:40,
    selection: task3info[2]
    
  }).on('change:selection', function(){
    
    progressheading.text = 'Progress: ' + progress3.selection + '%'
    
  }).appendTo(edit3)
  
//  var notificationsheading = new tabris.TextView({
    
//     left:20, top: 180,
   //  text: ‘Notifications: Remind me’
    
 // }).appendTo(edit3)
  
  /*var task3notifications = new tabris.Picker({
    
    left:180, top: 167,
    borderColor:'#ff0000',
    items: ['never', 'every day', 'every 3 days', 'every week', 'every 2 weeks'],
    selection: task3info[4]
    
  }).appendTo(edit3)
  */
  var save3 = new tabris.Button({
    
    right:30,top:400,
    text: 'Save'
    
  }).on('select', function(){
    
    task3info[0] = name3.text
    task3info[1] = month3.selection
    task3info[2] = progress3.selection
    task3info[3] = day3.selection
    //task3info[4] = task3notifications.selection
    edit3.dispose()
    
  }).appendTo(edit3)
  
  var cancel3 = new tabris.Button({
    
    left:30,top:400,
    text: 'Cancel'
    
  }).on('select', function(){
    

    edit3.dispose()
    
  }).appendTo(edit3)

  
}).appendTo(task3)

home.on('appear',function(){
  
  task3name.text     = task3info[0]
  task3date.text     = task3info[1] + ' ' + task3info[3]
  task3progress.selection = task3info[2]

  
})



var task4info = ['Review', 'Febuary',15, '16','never']

var task4 = new tabris.Composite({
  
  left:0,right:0,top:170,height:40,
  background: '#ffdddd'
  
}).appendTo(home)

var task4name = new tabris.TextView({
  
  left:20,top:10,
  text: task4info[0]
  
}).appendTo(task4)

var task4date = new tabris.TextView({
  
  right:100,top:10,
  text: task4info[1] + ' ' + task4info[3],
  alignment:'center'
  
}).appendTo(task4)

var task4progress = new tabris.ProgressBar({
  left:0,right:0,top:30,
  state: 'error',
  selection:task4info[2]
  
}).appendTo(task4)

new tabris.Button({
  
  right:10,top:0,
  text: 'Edit'
  
}).on('select', function(){
  
  
  var edit4 = new tabris.Page({
    
    title: task4info[0]
    
  }).appendTo(nav)
  
    var name4 = new tabris.TextInput({
    
    left:20,right:20,top:20, height:40,
    
    borderColor: '#ff0000',
    message: 'Assignment',
    text: task4info[0]
    
  }).appendTo(edit4);
  
  var month4 = new tabris.Picker({
    
    left:20,width:100,top:80,height:40,
    
    borderColor:'#ff0000',
    items: ['January', 'Febuary', 'March', 'April','May','June','July','August','September','October','November','December'],
	selection: task4info[1]
    
  }).appendTo(edit4)
  
  var day4 = new tabris.Picker({
    
    left:140,width:100,top:80,height:40,
    borderColor:'#ff0000',
    items: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    selection: task4info[3]

    
  }).appendTo(edit4)
  
var progressheading = new tabris.TextView({
    
    left:20,top:120,
    text:'Progress: ' + task4info[2] + '%'
    
  }).appendTo(edit4)
  
  var progress4 = new tabris.Slider({
    
    left:5,right:5,top:140,height:40,
    selection: task4info[2]
    
  }).on('change:selection', function(){
    
    progressheading.text = 'Progress: ' + progress4.selection + '%'
    
  }).appendTo(edit4)
  
//  var notificationsheading = new tabris.TextView({
    
//     left:20, top: 180,
   //  text: ‘Notifications: Remind me’
    
  //}).appendTo(edit4)
  
  /*var task4notifications = new tabris.Picker({
    
    left:180, top: 167,
    borderColor:'#ff0000',
    items: ['never', 'every day', 'every 3 days', 'every week', 'every 2 weeks'],
    selection: task4info[4]
    
  }).appendTo(edit4)
  */
  var save4 = new tabris.Button({
    
    right:30,top:400,
    text: 'Save'
    
  }).on('select', function(){
    
    task4info[0] = name4.text
    task4info[1] = month4.selection
    task4info[2] = progress4.selection
    task4info[3] = day4.selection
    //task4info[4] = task4notifications.selection
    edit4.dispose()
    
  }).appendTo(edit4)
  
  var cancel4 = new tabris.Button({
    
    left:30,top:400,
    text: 'Cancel'
    
  }).on('select', function(){
    

    edit4.dispose()
    
  }).appendTo(edit4)

  
}).appendTo(task4)

home.on('appear',function(){
  
  task4name.text     = task4info[0]
  task4date.text     = task4info[1] + ' ' + task4info[3]
  task4progress.selection = task4info[2]

  
})




var task5info = ['Writing', 'January',33, '11','never']

var task5 = new tabris.Composite({
  
  left:0,right:0,top:220,height:40,
  background: '#ffdddd'
  
}).appendTo(home)

var task5name = new tabris.TextView({
  
  left:20,top:10,
  text: task5info[0]
  
}).appendTo(task5)

var task5date = new tabris.TextView({
  
  right:100,top:10,
  text: task5info[1] + ' ' + task5info[3],
  alignment:'center'
  
}).appendTo(task5)

var task5progress = new tabris.ProgressBar({
  left:0,right:0,top:30,
  state: 'error',
  selection:task5info[2]
  
}).appendTo(task5)

new tabris.Button({
  
  right:10,top:0,
  text: 'Edit'
  
}).on('select', function(){
  
  
  var edit5 = new tabris.Page({
    
    title: task5info[0]
    
  }).appendTo(nav)
  
    var name5 = new tabris.TextInput({
    
    left:20,right:20,top:20, height:40,
    
    borderColor: '#ff0000',
    message: 'Assignment',
    text: task5info[0]
    
  }).appendTo(edit5);
  
  var month5 = new tabris.Picker({
    
    left:20,width:100,top:80,height:40,
    
    borderColor:'#ff0000',
    items: ['January', 'Febuary', 'March', 'April','May','June','July','August','September','October','November','December'],
	selection: task5info[1]
    
  }).appendTo(edit5)
  
  var day5 = new tabris.Picker({
    
    left:140,width:100,top:80,height:40,
    borderColor:'#ff0000',
    items: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    selection: task5info[3]

    
  }).appendTo(edit5)
  
var progressheading = new tabris.TextView({
    
    left:20,top:120,
    text:'Progress: ' + task5info[2] + '%'
    
  }).appendTo(edit5)
  
  var progress5 = new tabris.Slider({
    
    left:5,right:5,top:140,height:40,
    selection: task5info[2]
    
  }).on('change:selection', function(){
    
    progressheading.text = 'Progress: ' + progress5.selection + '%'
    
  }).appendTo(edit5)
  
//  var notificationsheading = new tabris.TextView({
    
//     left:20, top: 180,
   //  text: ‘Notifications: Remind me’
    
//  }).appendTo(edit5)
  
  /*var task5notifications = new tabris.Picker({
    
    left:180, top: 167,
    borderColor:'#ff0000',
    items: ['never', 'every day', 'every 3 days', 'every week', 'every 2 weeks'],
    selection: task5info[4]
    
  }).appendTo(edit5)
  */
  var save5 = new tabris.Button({
    
    right:30,top:400,
    text: 'Save'
    
  }).on('select', function(){
    
    task5info[0] = name5.text
    task5info[1] = month5.selection
    task5info[2] = progress5.selection
    task5info[3] = day5.selection
    //task5info[4] = task5notifications.selection
    edit5.dispose()
    
  }).appendTo(edit5)
  
  var cancel5 = new tabris.Button({
    
    left:30,top:400,
    text: 'Cancel'
    
  }).on('select', function(){
    

    edit5.dispose()
    
  }).appendTo(edit5)

  
}).appendTo(task5)

home.on('appear',function(){
  
  task5name.text     = task5info[0]
  task5date.text     = task5info[1] + ' ' + task5info[3]
  task5progress.selection = task5info[2]

  
})


var task6info = ['Presentation', 'June',84, '25','never']

var task6 = new tabris.Composite({
  
  left:0,right:0,top:270,height:40,
  background: '#ffdddd'
  
}).appendTo(home)

var task6name = new tabris.TextView({
  
  left:20,top:10,
  text: task6info[0]
  
}).appendTo(task6)

var task6date = new tabris.TextView({
  
  right:100,top:10,
  text: task6info[1] + ' ' + task6info[3],
  alignment:'center'
  
}).appendTo(task6)

var task6progress = new tabris.ProgressBar({
  left:0,right:0,top:30,
  state: 'error',
  selection:task6info[2]
  
}).appendTo(task6)

new tabris.Button({
  
  right:10,top:0,
  text: 'Edit'
  
}).on('select', function(){
  
  
  var edit6 = new tabris.Page({
    
    title: task6info[0]
    
  }).appendTo(nav)
  
    var name6 = new tabris.TextInput({
    
    left:20,right:20,top:20, height:40,
    
    borderColor: '#ff0000',
    message: 'Assignment',
    text: task6info[0]
    
  }).appendTo(edit6);
  
  var month6 = new tabris.Picker({
    
    left:20,width:100,top:80,height:40,
    
    borderColor:'#ff0000',
    items: ['January', 'Febuary', 'March', 'April','May','June','July','August','September','October','November','December'],
	selection: task6info[1]
    
  }).appendTo(edit6)
  
  var day6 = new tabris.Picker({
    
    left:140,width:100,top:80,height:40,
    borderColor:'#ff0000',
    items: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    selection: task6info[3]

    
  }).appendTo(edit6)
  
var progressheading = new tabris.TextView({
    
    left:20,top:120,
    text:'Progress: ' + task6info[2] + '%'
    
  }).appendTo(edit6)
  
  var progress6 = new tabris.Slider({
    
    left:5,right:5,top:140,height:40,
    selection: task6info[2]
    
  }).on('change:selection', function(){
    
    progressheading.text = 'Progress: ' + progress6.selection + '%'
    
  }).appendTo(edit6)
  
//  var notificationsheading = new tabris.TextView({
    
//     left:20, top: 180,
   //  text: ‘Notifications: Remind me’
    
 // }).appendTo(edit6)
  
  /*var task6notifications = new tabris.Picker({
    
    left:180, top: 167,
    borderColor:'#ff0000',
    items: ['never', 'every day', 'every 3 days', 'every week', 'every 2 weeks'],
    selection: task6info[4]
    
  }).appendTo(edit6)
  */
  var save6 = new tabris.Button({
    
    right:30,top:400,
    text: 'Save'
    
  }).on('select', function(){
    
    task6info[0] = name6.text
    task6info[1] = month6.selection
    task6info[2] = progress6.selection
    task6info[3] = day6.selection
    //task6info[4] = task6notifications.selection
    edit6.dispose()
    
  }).appendTo(edit6)
  
  var cancel6 = new tabris.Button({
    
    left:30,top:400,
    text: 'Cancel'
    
  }).on('select', function(){
    

    edit6.dispose()
    
  }).appendTo(edit6)

  
}).appendTo(task6)

home.on('appear',function(){
  
  task6name.text     = task6info[0]
  task6date.text     = task6info[1] + ' ' + task6info[3]
  task6progress.selection = task6info[2]

  
})


var task7info = ['Practice', 'September',55, '5','never']

var task7 = new tabris.Composite({
  
  left:0,right:0,top:320,height:40,
  background: '#ffdddd'
  
}).appendTo(home)

var task7name = new tabris.TextView({
  
  left:20,top:10,
  text: task7info[0]
  
}).appendTo(task7)

var task7date = new tabris.TextView({
  
  right:100,top:10,
  text: task7info[1] + ' ' + task7info[3],
  alignment:'center'
  
}).appendTo(task7)

var task7progress = new tabris.ProgressBar({
  left:0,right:0,top:30,
  state: 'error',
  selection:task7info[2]
  
}).appendTo(task7)

new tabris.Button({
  
  right:10,top:0,
  text: 'Edit'
  
}).on('select', function(){
  
  
  var edit7 = new tabris.Page({
    
    title: task7info[0]
    
  }).appendTo(nav)
  
    var name7 = new tabris.TextInput({
    
    left:20,right:20,top:20, height:40,
    
    borderColor: '#ff0000',
    message: 'Assignment',
    text: task7info[0]
    
  }).appendTo(edit7);
  
  var month7 = new tabris.Picker({
    
    left:20,width:100,top:80,height:40,
    
    borderColor:'#ff0000',
    items: ['January', 'Febuary', 'March', 'April','May','June','July','August','September','October','November','December'],
	selection: task7info[1]
    
  }).appendTo(edit7)
  
  var day7 = new tabris.Picker({
    
    left:140,width:100,top:80,height:40,
    borderColor:'#ff0000',
    items: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    selection: task7info[3]

    
  }).appendTo(edit7)
  
var progressheading = new tabris.TextView({
    
    left:20,top:120,
    text:'Progress: ' + task7info[2] + '%'
    
  }).appendTo(edit7)
  
  var progress7 = new tabris.Slider({
    
    left:5,right:5,top:140,height:40,
    selection: task7info[2]
    
  }).on('change:selection', function(){
    
    progressheading.text = 'Progress: ' + progress7.selection + '%'
    
  }).appendTo(edit7)
  
//  var notificationsheading = new tabris.TextView({
    
//     left:20, top: 180,
   //  text: ‘Notifications: Remind me’
    
//  }).appendTo(edit7)
  
  /*var task7notifications = new tabris.Picker({
    
    left:180, top: 167,
    borderColor:'#ff0000',
    items: ['never', 'every day', 'every 3 days', 'every week', 'every 2 weeks'],
    selection: task7info[4]
    
  }).appendTo(edit7)
  */
  var save7 = new tabris.Button({
    
    right:30,top:400,
    text: 'Save'
    
  }).on('select', function(){
    
    task7info[0] = name7.text
    task7info[1] = month7.selection
    task7info[2] = progress7.selection
    task7info[3] = day7.selection
    //task7info[4] = task7notifications.selection
    edit7.dispose()
    
  }).appendTo(edit7)
  
  var cancel7 = new tabris.Button({
    
    left:30,top:400,
    text: 'Cancel'
    
  }).on('select', function(){
    

    edit7.dispose()
    
  }).appendTo(edit7)

  
}).appendTo(task7)

home.on('appear',function(){
  
  task7name.text     = task7info[0]
  task7date.text     = task7info[1] + ' ' + task7info[3]
  task7progress.selection = task7info[2]

  
})




var task8info = ['Project', 'August',42, '27','never']

var task8 = new tabris.Composite({
  
  left:0,right:0,top:370,height:40,
  background: '#ffdddd'
  
}).appendTo(home)

var task8name = new tabris.TextView({
  
  left:20,top:10,
  text: task8info[0]
  
}).appendTo(task8)

var task8date = new tabris.TextView({
  
  right:100,top:10,
  text: task8info[1] + ' ' + task8info[3],
  alignment:'center'
  
}).appendTo(task8)

var task8progress = new tabris.ProgressBar({
  left:0,right:0,top:30,
  state: 'error',
  selection:task8info[2]
  
}).appendTo(task8)

new tabris.Button({
  
  right:10,top:0,
  text: 'Edit'
  
}).on('select', function(){
  
  
  var edit8 = new tabris.Page({
    
    title: task8info[0]
    
  }).appendTo(nav)
  
    var name8 = new tabris.TextInput({
    
    left:20,right:20,top:20, height:40,
    
    borderColor: '#ff0000',
    message: 'Assignment',
    text: task8info[0]
    
  }).appendTo(edit8);
  
  var month8 = new tabris.Picker({
    
    left:20,width:100,top:80,height:40,
    
    borderColor:'#ff0000',
    items: ['January', 'Febuary', 'March', 'April','May','June','July','August','September','October','November','December'],
	selection: task8info[1]
    
  }).appendTo(edit8)
  
  var day8 = new tabris.Picker({
    
    left:140,width:100,top:80,height:40,
    borderColor:'#ff0000',
    items: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    selection: task8info[3]

    
  }).appendTo(edit8)
  
var progressheading = new tabris.TextView({
    
    left:20,top:120,
    text:'Progress: ' + task8info[2] + '%'
    
  }).appendTo(edit8)
  
  var progress8 = new tabris.Slider({	
    
    left:5,right:5,top:140,height:40,
    selection: task8info[2]
    
  }).on('change:selection', function(){
    
    progressheading.text = 'Progress: ' + progress8.selection + '%'
    
  }).appendTo(edit8)
  
//  var notificationsheading = new tabris.TextView({
    
//     left:20, top: 180,
   //  text: ‘Notifications: Remind me’
    
 // }).appendTo(edit8)
  
  /*var task8notifications = new tabris.Picker({
    
    left:180, top: 167,
    borderColor:'#ff0000',
    items: ['never', 'every day', 'every 3 days', 'every week', 'every 2 weeks'],
    selection: task8info[4]
    
  }).appendTo(edit8)
  */
  var save8 = new tabris.Button({
    
    right:30,top:400,
    text: 'Save'
    
  }).on('select', function(){
    
    task8info[0] = name8.text
    task8info[1] = month8.selection
    task8info[2] = progress8.selection
    task8info[3] = day8.selection
    //task8info[4] = task8notifications.selection
    edit8.dispose()
    
  }).appendTo(edit8)
  
  var cancel8 = new tabris.Button({
    
    left:30,top:400,
    text: 'Cancel'
    
  }).on('select', function(){
    

    edit8.dispose()
    
  }).appendTo(edit8)

  
}).appendTo(task8)

home.on('appear',function(){
  
  task8name.text     = task8info[0]
  task8date.text     = task8info[1] + ' ' + task8info[3]
  task8progress.selection = task8info[2]

  
})




var task9info = ['Programming', 'October',7, '1','never']

var task9 = new tabris.Composite({
  
  left:0,right:0,top:420,height:40,
  background: '#ffdddd'
  
}).appendTo(home)

var task9name = new tabris.TextView({
  
  left:20,top:10,
  text: task9info[0]
  
}).appendTo(task9)

var task9date = new tabris.TextView({
  
  right:100,top:10,
  text: task9info[1] + ' ' + task9info[3],
  alignment:'center'
  
}).appendTo(task9)

var task9progress = new tabris.ProgressBar({
  left:0,right:0,top:30,
  state: 'error',
  selection:task9info[2]
  
}).appendTo(task9)

new tabris.Button({
  
  right:10,top:0,
  text: 'Edit'
  
}).on('select', function(){
  
  
  var edit9 = new tabris.Page({
    
    title: task9info[0]
    
  }).appendTo(nav)
  
    var name9 = new tabris.TextInput({
    
    left:20,right:20,top:20, height:40,
    
    borderColor: '#ff0000',
    message: 'Assignment',
    text: task9info[0]
    
  }).appendTo(edit9);
  
  var month9 = new tabris.Picker({
    
    left:20,width:100,top:90,height:40,
    
    borderColor:'#ff0000',
    items: ['January', 'Febuary', 'March', 'April','May','June','July','August','September','October','November','December'],
	selection: task9info[1]
    
  }).appendTo(edit9)
  
  var day9 = new tabris.Picker({
    
    left:140,width:100,top:90,height:40,
    borderColor:'#ff0000',
    items: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    selection: task9info[3]

    
  }).appendTo(edit9)
  
var progressheading = new tabris.TextView({
    
    left:20,top:120,
    text:'Progress: ' + task9info[2] + '%'
    
  }).appendTo(edit9)
  	
  var progress9 = new tabris.Slider({	
    
    left:5,right:5,top:140,height:40,
    selection: task9info[2]
    
  }).on('change:selection', function(){
    
    progressheading.text = 'Progress: ' + progress9.selection + '%'
    
  }).appendTo(edit9)
  
//  var notificationsheading = new tabris.TextView({
    
//     left:20, top: 180,
   //  text: ‘Notifications: Remind me’
    
  //}).appendTo(edit9)
  
  /*var task9notifications = new tabris.Picker({
    
    left:180, top: 167,
    borderColor:'#ff0000',
    items: ['never', 'every day', 'every 3 days', 'every week', 'every 2 weeks'],
    selection: task9info[4]
    
  }).appendTo(edit9)
  */
  var save9 = new tabris.Button({
    
    right:30,top:400,
    text: 'Save'
    
  }).on('select', function(){
    
    task9info[0] = name9.text
    task9info[1] = month9.selection
    task9info[2] = progress9.selection
    task9info[3] = day9.selection
    //task9info[4] = task9notifications.selection
    edit9.dispose()
    
  }).appendTo(edit9)
  
  var cancel9 = new tabris.Button({
    
    left:30,top:400,
    text: 'Cancel'
    
  }).on('select', function(){
    

    edit9.dispose()
    
  }).appendTo(edit9)

  
}).appendTo(task9)

home.on('appear',function(){
  
  task9name.text     = task9info[0]
  task9date.text     = task9info[1] + ' ' + task9info[3]
  task9progress.selection = task9info[2]

  
})




var task10info = ['Report', 'December',0, '17','never']

var task10 = new tabris.Composite({
  
  left:0,right:0,top:470,height:40,
  background: '#ffdddd'
  
}).appendTo(home)

var task10name = new tabris.TextView({
  
  left:20,top:10,
  text: task10info[0]
  
}).appendTo(task10)

var task10date = new tabris.TextView({
  
  right:100,top:10,
  text: task10info[1] + ' ' + task10info[3],
  alignment:'center'
  
}).appendTo(task10)

var task10progress = new tabris.ProgressBar({
  left:0,right:0,top:30,
  state: 'error',
  selection:task10info[2]
  
}).appendTo(task10)

new tabris.Button({
  
  right:10,top:0,
  text: 'Edit'
  
}).on('select', function(){
  
  
  var edit10 = new tabris.Page({
    
    title: task10info[0]
    
  }).appendTo(nav)
  
    var name10 = new tabris.TextInput({
    
    left:20,right:20,top:20, height:40,
    
    borderColor: '#ff0000',
    message: 'Assignment',
    text: task10info[0]
    
  }).appendTo(edit10);
  
  var month10 = new tabris.Picker({
    
    left:20,width:100,top:90,height:40,
    
    borderColor:'#ff0000',
    items: ['January', 'Febuary', 'March', 'April','May','June','July','August','September','October','November','December'],
	selection: task10info[1]
    
  }).appendTo(edit10)
  
  var day10 = new tabris.Picker({
    
    left:140,width:100,top:90,height:40,
    borderColor:'#ff0000',
    items: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    selection: task10info[3]

    
  }).appendTo(edit10)
  
var progressheading = new tabris.TextView({
    
    left:20,top:120,
    text:'Progress: ' + task10info[2] + '%'
    
  }).appendTo(edit10)
  	
  var progress10 = new tabris.Slider({	
    
    left:5,right:5,top:140,height:40,
    selection: task10info[2]
    
  }).on('change:selection', function(){
    
    progressheading.text = 'Progress: ' + progress10.selection + '%'
    
  }).appendTo(edit10)
  
//  var notificationsheading = new tabris.TextView({
    
//     left:20, top: 180,
   //  text: ‘Notifications: Remind me’
    
 // }).appendTo(edit10)
  
  /*var task10notifications = new tabris.Picker({
    
    left:180, top: 167,
    borderColor:'#ff0000',
    items: ['never', 'every day', 'every 3 days', 'every week', 'every 2 weeks'],
    selection: task10info[4]
    
  }).appendTo(edit10)
  */
  var save10 = new tabris.Button({
    
    right:30,top:400,
    text: 'Save'
    
  }).on('select', function(){
    
    task10info[0] = name10.text
    task10info[1] = month10.selection
    task10info[2] = progress10.selection
    task10info[3] = day10.selection
    //task10info[4] = task10notifications.selection
    edit10.dispose()
    
  }).appendTo(edit10)
  
  var cancel10 = new tabris.Button({
    
    left:30,top:400,
    text: 'Cancel'
    
  }).on('select', function(){
    

    edit10.dispose()
    
  }).appendTo(edit10)

  
}).appendTo(task10)

home.on('appear',function(){
  
  task10name.text     = task10info[0]
  task10date.text     = task10info[1] + ' ' + task10info[3]
  task10progress.selection = task10info[2]

  
})
