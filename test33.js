Testcase
Result
1
[{"b":1,"a":2},{"b":3,"a":4}]
[{"a":1,"b":2},{"c":3,"d":4},{}]
[{"a":{"b":1,"c":2}},{"a":{"b":3,"d":4}}]
[[{"a":null}],[{"b":true}],[{"c":"x"}]]
[{},{},{}]


let Input= [{"_id":"64265e18f4596ed5b53673c1","index":0,"guid":"bf29f675-5742-43a5-b667-d7158aa9cca4","isActive":true,"balance":"$1,216.03","picture":"http://placehold.it/32x32",
"age":34,"eyeColor":null,"name":"Roberts West","gender":"male","company":"GEEKY","email":"robertswest@geeky.com","phone":"+1 (918) 600-2564",
"address":"584 Logan Street, Whitewater, Alaska, 1691","registered":"2022-12-24T06:42:37 +06:00","latitude":82.029314,"longitude":88.713256,
"tags":["et",true,"velit","velit","ullamco","qui","nostrud"],"friends":[{"id":0,"name":"Manuela Hart"},{"id":1,"name":"Janice Sykes"},{"id":2,"name":"Beasley Bonner"}],
"greeting":"Hello, Roberts West! You have 6 unread messages.","favoriteFruit":"apple"},{"_id":"64265e18f4596ed5b53673c1","index":0,
"guid":"0.6447751424717756","isActive":"0.8087219208814307","balance":"0.23019597472349096","picture":"http://placehold.it/32x32","age":"0.16869023093807578","eyeColor":null,
"name":"Roberts West","gender":"0.5100291689060403","company":"GEEKY","email":"robertswest@geeky.com","phone":"+1 (918) 600-2564","address":{"x":true},
"registered":"2022-12-24T06:42:37 +06:00","latitude":82.029314,"longitude":88.713256,"tags":[{"x":true},true,"velit","velit","ullamco","qui","nostrud"],
"friends":[{"id":0,"name":"Manuela Hart"},
{"id":"0.5323551231335333","name":"0.55352125545771"},{"id":2,"name":"Beasley Bonner"}],
"greeting":"Hello, Roberts West! You have 6 unread messages.","favoriteFruit":"apple"}]


let Output= [["_id","address","address.x","age","balance","company","email","eyeColor","favoriteFruit","friends.0.id","friends.0.name","friends.1.id","friends.1.name","friends.2.id",
"friends.2.name","gender","greeting","guid","index","isActive","latitude","longitude","name","phone","picture","registered","tags.0","tags.0.x","tags.1","tags.2","tags.3",
"tags.4","tags.5","tags.6"],["64265e18f4596ed5b53673c1","584 Logan Street, Whitewater, Alaska, 1691","",34,"$1,216.03","GEEKY","robertswest@geeky.com",null,"apple",0,"Manuela Hart",1,
"Janice Sykes",2,"Beasley Bonner","male","Hello, Roberts West! You have 6 unread messages.","bf29f675-5742-43a5-b667-d7158aa9cca4",0,true,82.029314,88.713256,"Roberts West",
"+1 (918) 600-2564","http://placehold.it/32x32","2022-12-24T06:42:37 +06:00","et","",true,"velit","velit","ullamco","qui","nostrud"],
["64265e18f4596ed5b53673c1",{"x":true},true,"0.16869023093807578","0.23019597472349096","GEEKY","robertswest@geeky.com",null,"apple",0,"Manuela Hart","0.5323551231335333" ]];//...

let Expected= [["_id","address","address.x","age","balance","company","email","eyeColor","favoriteFruit","friends.0.id","friends.0.name","friends.1.id","friends.1.name","friends.2.id",
"friends.2.name","gender","greeting","guid","index","isActive","latitude","longitude","name","phone","picture","registered","tags.0","tags.0.x","tags.1","tags.2","tags.3",
"tags.4","tags.5","tags.6"],["64265e18f4596ed5b53673c1","584 Logan Street, Whitewater, Alaska, 1691","",34,"$1,216.03","GEEKY","robertswest@geeky.com",null,"apple",0,"Manuela Hart",1,
"Janice Sykes",2,"Beasley Bonner","male","Hello, Roberts West! You have 6 unread messages.","bf29f675-5742-43a5-b667-d7158aa9cca4",0,true,82.02931,88.71326,"Roberts West",
"+1 (918) 600-2564","http://placehold.it/32x32","2022-12-24T06:42:37 +06:00","et","",true,"velit","velit","ullamco", ]]; //...


