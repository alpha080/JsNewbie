## 你的编程语言做得到吗
## 2006-08-01
## 软件随想录 More Joel on Software

## 1 begin 用函数取代重复代码 

alert("I'd likesome Spaghetti!");
alert("I'd likesome Chocolate Mousse!");

# creat a function to reuse the last two statement

function SwedishChef(food)
{
    alert("I'd like some " + food + "!")
}	

SwedishChef("Spaghetti");
SwedishChef("Chocolate Mousse");

## 1 end

## 2 begin 下面两块代码看起来几乎相同

alert("get the lobster");
PutInPot("lobster");
PutInPot("water");

alert("get the chicken");
BoomBoom("chicken");
BoomBoom("coconut");

# function as a argument of another function
# 将函数作为一个参数传人另一个函数中

function Cook(i1, i2, f)
{
    alert("get the " + i1);
    f(i1);
    f(i2);
}

Cook("lobster", "water", PutInPot);
Cook("chicken", "coconut", BoomBoom);

# anonymous function 函数定义直接作为参数

Cook("chicker",
     "water",
     function(x){alert("pot " +x);});
Cook("chicken",
     "coconut",
     function(x){alert("boom " +x)});

## 2 end

## 3 begin 遍历数组元素

var a = [1, 2, 3];

for (i = 0; i < a.length; i++)
{
    a[i] = a[i] * 2;
}

for (i = 0; i < a.length; i++)
{
    alert(a[i]);
}


# 

function map(fn, a)
{
    for(i = 0; i < a.length; i++)
    {
        a[i] = fn(a[i]);
    }
}

map(function(x){return x*2;}, a);
map(alert, a);

# 将数组的所有值以某种方式进行累加 

function sum(a)
{
    var s = 0;
    for(i = 0; i < a.length; i++)
        s += a[i];
    return s;
}

function join(a)
{
    var s = "";
    for(i = 0; i < a.length; i++)
	s += a[i];
    return s;
}

alert(sum([1, 2, 3]));
alert(jion(["a", "b", "c"]));

# 

function reduce(fn, a, init)
{
    var s = init;
    for(i = 0; i < a.length; i++)
        s = fn(s, a[i]);
    return s;
}

function sum(a)
{
    return reduce(function(a, b){return a + b;}, a, 0);
}

function join(a)
{
	    return reduce(function(a, b){return a + b;}, a, "");
}

## 3 end
