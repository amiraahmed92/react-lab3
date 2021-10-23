import { Route } from 'react-router-dom'
export const Contact = () => {
    
    return (
        <>
        <h1>contact us</h1>
        <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div><br></br>
<div>
        <Route render={({ history}) => (
          <button
            type='button'
            onClick={() => { history.push('/Users') }}
          >
            Back
          </button>
        )}/>
        </div>
      


  
</>
    )
}