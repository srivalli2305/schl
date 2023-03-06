import React, { Component } from 'react'

class CreateSchool extends Component {
    render() {
        return (
            <div className='container'style={{backgroundColor:"#eebefa"}}>
                <div className='card'style={{marginTop:50}}>
                    <div className='card-header'style={{backgroundColor:"#eebefa"}}>
                        <h1 style={{color:"#38031d"}}><b>Create School</b></h1>
                    </div>
                    <div className='card-body'style={{backgroundColor:"#eebefa"}}>
                        <form>
                            <form>
                                <div class="mb-3">
                                    <label for="sid" class="form-label"> school id</label>
                                    <input type="text" class="form-control" id="sid" />
                                </div>
                                <div class="mb-3">
                                    <label for="sname" class="form-label">school name</label>
                                    <input type="sname" class="form-control" id="sname" />
                                </div>
                                <div class="mb-3">
                                    <label for="city" class="form-label">city</label>
                                    <input type="city" class="form-control" id="city" />
                                </div>
                                <div class="mb-3">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>select school</option>
                                        <option value="kumar public school">kumar public school</option>
                                        <option value="trividha public school">trividha public school</option>
                                        <option value="bis">bis</option>
                                        <option value="st.ann's ">st.ann's </option>
                                        <option value="st.thomas">st.thomas</option>
                                    </select>
                                </div>
                                <button class="btn btn-primary">Submit</button>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateSchool;


