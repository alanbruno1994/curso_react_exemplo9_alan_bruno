import {Component} from 'react'


type MyProps={
    visable:boolean
}

type MyState={
    name:string
    age:number
}

export default class Form extends Component<MyProps,MyState>{//Aqui se defini o tipo do props do state

    constructor(props:MyProps)
    {
        super(props)
        this.state={//inicializa o state
            name:'',
            age:0
        }
        this.updateName=this.updateName.bind(this)
    }
    //similar ao useEffect(()=>{},[])
    componentDidMount()//Assim que o componente for montado ele coloca 18 para age
    {
        this.setState({age:18})
    }

    //isso aqui ficou similar ao useEffect(()=>{},[age])
    componentDidUpdate(prevProp: any,prevState: any){
        if(prevState.age!==this.state.age){//precisa disso para evitar loop infinito
            if(this.state.age>100)
            this.setState({age:100})
        }
    }


    //usar arrow function por causa do this e nao precisar fazer um bind
    action=(event:any)=>{
        event.preventDefault()
        alert(this.state.name+' '+this.state.age)
    }
    //Aqui precisa do bind
    updateName(event:React.ChangeEvent<HTMLInputElement>)
    {
        //nao precisa usar o ...
        this.setState({name:event.target.value})
    }

    render()
    {
        if(this.props.visable)
        {
            return <form onSubmit={this.action}>
                <input value={this.state.name} onChange={this.updateName}/>
                <input value={this.state.age} onChange={event=>this.setState({age:+event.target.value})}/>
                <input type="submit" value="Click"></input>
            </form>
        }

        return <></>
    }
}