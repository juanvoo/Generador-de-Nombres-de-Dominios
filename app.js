const { format } = require("prettier");

     let pronoun = ['the','our'];
     let adj = ['great', 'big' ];
     let noun = ['jogger','racoon'];

for(let i = 0; i < pronoun.length; i++) {
    for(let j = 0; j < adj.length; j++) {
        for(let n = 0; n < noun.length; n++) { 
          console.log(pronoun[i].concat(adj[j],noun[n]) + ".com");
        }
    }
}
