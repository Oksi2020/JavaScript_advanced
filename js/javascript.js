function choose_first()
{
    var myList = document.getElementById('list');
    var first = document.getElementById("list").firstChild;
    for(var i = 0;i<myList.childNodes.length;i++)
    {
        myList.childNodes[i].style.color = 'black';
    }
    first.style.color = 'red';
}

function choose_last()
{
    var myList = document.getElementById('list');
    var first = document.getElementById('list').firstChild;
    for(var i = 0;i<myList.childNodes.length;i++)
    {
        myList.childNodes[i].style.color = 'black';
    }
    var last = document.getElementById("list").lastChild;
    last.style.color = 'red';
}
function next()
{
    var myList = document.getElementById('list');
    var active;
    var next;
    for(var i = 0;i<myList.childNodes.length-1;i++)
    {
        if(myList.childNodes[i].style.color == 'red')
        {
            active = myList.childNodes[i];
        }
    }
    if(active)
    {
        next = active.nextSibling;
        next.style.color = 'red';
        active.style.color = 'black';
    }
    else
    {
        active=myList.firstChild;
        active.style.color = 'red';
    }
    if(myList.firstChild.style.color == 'red')
    {
        myList.lastChild.style.color = 'black';
    }
}
function last()
{
    var myList = document.getElementById('list');
    var active;
    var next;
    for(var i = myList.childNodes.length-1;i>0;i--)
    {
        if(myList.childNodes[i].style.color == 'red')
        {
            active = myList.childNodes[i];
        }
        if(myList.childNodes[i]!==active)
        {
            myList.childNodes[i].style.color = 'black';
        }
    }
    if(active)
    {
        next = active.previousSibling;
        next.style.color = 'red';
        active.style.color = 'black';
    }
    else
    {
        active=myList.lastChild;
        active.style.color = 'red';
    }
    if(myList.lastChild.style.color == 'red')
    {
        myList.firstChild.style.color = 'black';
    }
}
function add()
{
    var newItem = document.createElement('li');
    newItem.innerHTML = 'Lamborgini';
    var rem = document.getElementById('list').lastChild;
    document.getElementById('list').appendChild(newItem);
    if(rem.style.color == 'red')
    {
        var previous = rem.nextSibling;
        console.log(previous);
        previous.style.color = 'red';
        rem.style.color = 'black';
    }
}
function add_to_start()
{
    var rem = document.getElementById('list').firstChild;
    var myList = document.getElementById('list');
    var newItem = document.createElement('li');
    var firstLi = myList.firstChild;
    newItem.innerHTML = 'First Element';
    myList.prepend(newItem);
    if(rem.style.color == 'red')
    {
        // console.log(previous);
        newItem.style.color = 'red';
        rem.style.color = 'black';
    }
}

function remove()
{
    var removeLast = document.getElementById("list");
    var rem = removeLast.lastChild;
    if(rem.style.color == 'red')
    {
        var previous = rem.previousSibling;
        console.log(previous);
        previous.style.color = 'red';
    }
    removeLast.removeChild(rem);
}