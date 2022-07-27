import React, {useState} from 'react';

const MyForm = () => {
    const [form, setForm] = useState({
        name: "",
        description: ""
    })
    const {name, description} = form;
    const onChange = (e: any)=>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
        console.log(form)
    }
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        setForm({
            name: '',
            description: ''
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='name' value={name} onChange={onChange} />
            <input name='description' value={description} onChange={onChange} />
            <button type='submit'>등록</button>
        </form>
    );
};

export default MyForm;