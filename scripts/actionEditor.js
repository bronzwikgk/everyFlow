
//create output
        //filter keys
        //filter values
        //append to output
        // getChild


ehhAppOutput = document.createElement('ehhOutput');
var temp = new Entity(actionEditor,ehhAppOutput);
//newBlock = Entity.create(actionEditor.actionEditorBlock,temp.entity)
//console.log(newBlock)
//console.log(temp.entity)
document.getElementsByTagName('body')[0].appendChild(temp.entity);
console.log("all set and done")
//console.log(temp.output);