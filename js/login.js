var campo1=document.querySelector('#uname');
var campo2=document.querySelector('#pwd');
var campo3=document.querySelector('#pwdConf');
var campo4=document.querySelector('#chkPermissao');
var erro=document.querySelector('#errorSenha');



    function apagarTexto(){
        
        campo1.value= '';
        campo2.value= '';
        campo3.value= '';
        campo4.checked=false;       
                   
    }

/* 
function confereSenha(){
    const senha=document.querySelector ('input[id=pwd]').value;
    const confirma=document.querySelector ('input[id=pwdConf]').value;

    if(confirma != senha){
        
            alert('As senhas não conferem');
        
        
    }

}
*/