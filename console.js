//on create contact page and wait

var addressbook = [
	{name:'name1', mail:'mail1'},
	{name:'name2', mail:'mail2'},
	//...
	{name:'nameN', mail:'mailN'}
];

document.querySelectorAll('#contents>*').forEach(function(el,i){
	el.style.height = '30%';
});

var my_frame = document.createElement('iframe');
my_frame.style.backgroundColor='white';
my_frame.style.width = '95%'
my_frame.style.height = '60%'
document.getElementById('contents').appendChild(my_frame);

my_frame.src=window.location.href;

var len = addressbook.length;

addressbook.forEach(function(el,i){
	setTimeout(function(){
		my_frame.contentDocument.querySelector('input[title="Ім\'я"]').value = el.name; //interface translated
		my_frame.contentDocument.querySelector('#x_4w8').value = el.mail;
		my_frame.contentDocument.querySelector('#x_4w8').onchange();
		my_frame.contentDocument.querySelector('#toolBar>button').click();
		console.log(el,i,len);
		setTimeout(function(){
			my_frame.src='about:blank';
			my_frame.src=window.location.href;
		},2000);
	},6000*i);
});
