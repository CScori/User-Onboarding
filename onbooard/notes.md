>high order component
>component that takes in component and gives back component ,advanced react, redux

const Form1form= withformik({

})(animalform)
consl.lg('hoc' form1form)
>^ this fnc takes simple form fnc and lets formik use librry
> fnc returns comp captures anlform>


>map prop to value formik specific object = transfers states like props.values
>a reg nonformik form does not need state handle change or submit

const Form1form= withformik({
mapPropsToValues() {
    return {
        tjings: 'test' <-- this is passed into form fnc as prop and kvp as value={value.thing}> 
        onCHange={handleChange} <-- also as prop in main form-- htis comes from formik withou having to define outside of return
    }
}
})(animalform)



const Form1form= withformik({
mapPropsToValues({species, size}) { <-- this takes in new input-- this is also destructuring
    return {
      species: species || "", <-- this says species or new input ||= or 
    }
}
})(animalform)
>name in form fnc is what allows map props

> Form for handle submit on form 


const Form1form= withformik({
mapPropsToValues({species, size}) { 
    return {
      species: species || "", <-- this alows new entry to be stored in state>
      size: size || "",
    }
}
handleSubmit(values)<-- this stores vzlue pair on FORM but without being declared
})(animalform)

>field lets u write without handle change and value... value being set in map value pairs 
> for drop down you need compnt being named
>lets handle change be reomoved from prop



>Dropdown and select 
 <Field component="dropdown/select" name="color">
            <option value="brown">brown</option>
            <option value="black">Black</option>
            <option value="spots">Spots</option>
          </Field>


const Form1form= withformik({
mapPropsToValues({species, size, diet}) { 
    return {
      species: species || "",
      size: size || "",
     diet: diet || "" <-- this maps the values to a dropdown withoot using the mapfnc>
    }
}
handleSubmit(values)
})(animalform)


>Checkboxes
<Label checkbox>
<Field type='checkbox' name = 'vax' checked={values.vax} />
</Label>

const Form1form= withformik({
mapPropsToValues({species, size, diet, vax}) { 
    return {
      species: species || "",
      size: size || "",
     diet: diet || "" ,
     vax: vax || false, <true in this will pre select the yes>
    }
}
handleSubmit(values)
})(animalform)


VALIDATION = requires fields or length using yup also uses regex<confusing
>object schema validtation
import * as Yup from "Yup"

const Form1form= withformik({
mapPropsToValues({species, size, diet, vax}) { 
    return {
      species: species || "",
      size: size || "",
     diet: diet || "" ,
     vax: vax || false, 
    }
}
validationSchema: Yup.object().shape({
    spec: Yup.string().required("this is an err")<-- custom error message>
}),
>^ this will make the listed objects requirements nec to submit form without errors -- but need to link to the frm fnc -- pass in errors or touched
handleSubmit(values)
})(animalform)


<Field type="text" name="species" placeholder="Species" />
        {touched.species && errors.species && (
          <p className="error">{errors.species}</p>
> if we type in t.s (&&) and we set an error then (&&) returns true then (<p>)have the alert under feild to require the 




POST REQUEST <usualy use back end but without api back we are using REQ|RES= allows front to use api without api>
>able to use formik handle submit  using setStatus

const Form1form= withformik({
mapPropsToValues({species, size, diet, vax}) { 
    return {
      species: species || "",
      size: size || "",
     diet: diet || "" ,
     vax: vax || false, 
    }
}
validationSchema: Yup.object().shape({
    spec: Yup.string().required("this is an err")
}),
handleSubmit(values, {setStatus}<-- passed in from formik>) {
axios
.post(reqresapi, values)
.then(res => {
    setStatus(res.data)<-- this is part of the return>
    c.log(res)<-- status 201 means posting >
})
.catch(err => {
    c.log(err)
})

}<-- axios call for post>
})(animalform)




USESTAE FROM VALIDATION in reg from 
const [animals, setAnimals] = useState ({})<--able to see after submit
>this is in main form fnc

EFFECT TO SEE CHANGE
useeffect(() => {
    if (status) {
        setAnimal([...animals, status])
    }
}) [status]
> this watches for the changes in the state from the axios post

in form function after form
{animals.map(animal => (
    <ul>
        <li>label then js{animal.spec, etc }
))}