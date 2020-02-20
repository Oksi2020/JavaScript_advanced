var act ;
var myList = document.getElementById('list');
var first = myList.firstChild;
var last = myList.lastChild;


function choose_first1()
{
    act = first;
    check();
}
function choose_last1()
{
    act = last;
    check();
}

function next1()
{
    if(act)
    {
        if(act==last)
        {
            act = first;
        }
        else
        {
            act = act.nextSibling;
        }
    }
    else
    {
        act = first;
    }
    check();
}
function last1()
{
    if(act)
    {
        if(act==first)
        {
            act = last;
        }
        else
        {
            act = act.previousSibling;
        }
    }
    else
    {
        act = last;
    }
    check();
}

function add1()
{
    var newItem = document.createElement('li');
    newItem.innerHTML = 'Lamborgini';
    var rem = myList.lastChild;
    document.getElementById('list').appendChild(newItem);
    if(rem == act)
    {
        act = newItem;
    }
    last = myList.lastChild;
    check();
}
function add_to_start1()
{
    var newItem = document.createElement('li');
    var rem = myList.firstChild;
    newItem.innerHTML = 'First Element';
    myList.prepend(newItem);
    if( rem == act)
    {
        act = newItem;
    }
    first = myList.firstChild;
    check();
}
function remove1()
{
    var rem = myList.lastChild;
    if(rem == act)
    {
        act = rem.previousSibling;
    }
    myList.removeChild(rem);
    last = myList.lastChild;
    check();
}
function check()
{
    for(var i = 0;i<myList.childNodes.length;i++)
    {
        if(myList.childNodes[i] == act)
        {
            act.style.color = 'red';
        }
        else{
            myList.childNodes[i].style.color = 'black';
        }
    }
}