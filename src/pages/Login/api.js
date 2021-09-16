exports.fcIncluirUsuario = async (InputcpEmail, InputcpSenha )  =>  {


        const api = `https://api.marcelonardi.com/login`;
                                
        const options = {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'clientId': 'XYZ2021' },
        body: JSON.stringify({ user: 'sal.marcelonardi@gmail.com', password: 'xyz2021' })
        };

        const results = await fetch(api, options);
        const data = await results.json();
        console.log(data.token);

        const apiuser = `https://api.marcelonardi.com/usuarios`;
        
        console.log("email");
        console.log(InputcpEmail);
        console.log("senha");
        console.log(InputcpSenha);
        
        const optionsUser = {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'clientId': 'XYZ2021', 'x-access-token': data.token },
        body: JSON.stringify({ emailUsuario: `${InputcpEmail}`, nmUsuario: `${InputcpEmail}` , senhaUsuario: `${InputcpSenha}` })
        };

        const resultsUser = await fetch(apiuser, optionsUser);
        const dataUser = await resultsUser.json();

        console.log("datauser");
        console.log(dataUser);
        return dataUser;
        
};


// async function getData() {

//         //const api = `https://areom00ua9.execute-api.sa-east-1.amazonaws.com/dev1/usuarios`;
//         const api = `https://api.marcelonardi.com/produtos`;
//         //const api = `https://viacep.com.br/ws/06642370/json/`;
        
//         const options = {
            
//             method: 'GET',
//             headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJRCI6IlhZWjIwMjEiLCJpYXQiOjE2MzE3MzQzOTIsImV4cCI6MTYzMTc0MDM5Mn0.9IZ-XR1NfMvtJX3crHlm0SjGq3PXP99hAgL9rZMIx2w'},
//             cache: 'default'
//         };

    
//         const results = await fetch(api, options);
//         const data = await results.json();
//         console.log("RESULTADO DADOS");
//         console.log(data);
//         console.log(data[0].cdProduto);

// };