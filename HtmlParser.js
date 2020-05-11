var ejs = require("ejs")

class HtmlParser{
     static async Parse(table){

        try{
            return await ejs.renderFile("./table.ejs", {header:table.header, rows:table.rows})
        }catch(err){
            console.log(err)
        }
        
    }
}

module.exports = HtmlParser