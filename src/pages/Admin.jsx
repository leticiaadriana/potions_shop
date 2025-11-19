import Banner from '../components/banner'
import Forms from '../components/forms'
import DeleteForms from '../components/deleteForms'
import Panel from '../components/panel'
import "./layout.css"
function Admin () {
    return (
        <>
            <Banner/>
            <div className="forms-container">
                <Forms/>
                <DeleteForms/>
                
            </div>
            <Panel/>
        </>
    );
}

export default Admin;