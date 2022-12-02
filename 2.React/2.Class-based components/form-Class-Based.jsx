class FormularioHome extends React.Component {
    constructor() {
        super();
        this.state = {
            full_name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Submit Form
    submitForm() {
        fetch('https://tecnoelectrocomercioonline.com/api/formularioHome/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then((data) => console.log(data));

        this.setState({
            full_name: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    render() {
        return (
            <>
                <form method="POST"  >
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input className="input" value={this.state.full_name} name="full_name" onChange={this.changeHandler} type="text" id="name" placeholder="Tu nombre" required />
                        </div>
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                            <input className="input" value={this.state.email} name="email" onChange={this.changeHandler} id="email" placeholder="Tu E-mail" required />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input className="input" value={this.state.subject} name="subject" onChange={this.changeHandler} id="subject" placeholder="Motivo" required />
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="input" value={this.state.message} name="message" onChange={this.changeHandler} id="message" rows={5} placeholder="Mensaje" required />
                    </div>
                    <div className="text-center"><button className="btn btn-info text-white" type="submit" onClick={this.submitForm}>Enviar Mensaje</button>
                    </div>
                </form>
            </>
        );
    }
}

export default FormularioHome;