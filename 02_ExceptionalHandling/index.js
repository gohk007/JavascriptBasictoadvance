console.log('hai there');



window.onerror =(message,url,line,col,error)=>
{


    alert(`${'message'+message+'At'+url}`)
}