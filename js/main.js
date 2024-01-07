$('#cpf').mask('000.000.000-00', {placeholder: '___.___.___-__'})

$('#telefone').mask('(00) 00000-0000', {placeholder: '(__) _____-____'})

$('#cep').mask('00000-000', {placeholder: '00000-000'})

$('form').validate({
    rules: {
        nome:{
            required: true
        },
        telefone:{
            required: true
        },
        email:{
            required: true
        },
        cpf:{
            required: true
        },
        endereco:{
            required: true
        },
        cep:{
            required: true
        },
    },
    messages: {
        nome: 'Por favor, insira seu nome',
        telefone: 'Por favor, insira seu telefone',
        email: 'Por favor, insira seu email',
        cpf: 'Por favor, insira seu cpf',
        endereco: 'Porf favor, insira seu endereço',
        cep: 'Por favor, insira seu cep'
    }
})

