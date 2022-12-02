
import { useState } from 'react';
//Forms
import { Uncontrolled } from "./UncontrolledForm";
import { Controlled } from "./ControlledForm";
//Modals
import { UncontrolledModal } from "./UncontrolledModal";
import { ControlledModal } from "./ControlledModal";
//Onbloarding Flows
import { UncontrolledOnboardingFlow } from './ControlledOnboardingFlow';

const StepOne = ({ goToNext }) => (
    <>
        <h1>
            1
        </h1>
        <button onClick={() => goToNext({ name: 'Brealy Padron' })}>Next</button>
    </>
);

const StepTwo = ({ goToNext }) => (
    <>
        <h1>
            2
        </h1>
        <button onClick={() => goToNext({ age: '27' })}>Next</button>
    </>
);

const StepThree = ({ goToNext }) => (
    <>
        <h1>
            3
        </h1>
        <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
    </>
);


function App() {
    const [shouldShowModal, setShouldShowModal] = useState(false);

    const ShowHideModal = () => {
        if (setShouldShowModal == true) {
            alert('are you sure?');
        }
        setShouldShow(!shouldShowModal);
    }

    const StopEventPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            <Uncontrolled />
            <Controlled />
            <UncontrolledModal />
            <ControlledModal
                shouldShow={shouldShowModal}
                ShowHideModal={() => {
                    setShouldShowModal(false)
                }}
                StopEventPropagation={StopEventPropagation}
            />
            <button onClick={ShowHideModal}>
                {setShouldShowModal ? 'Hide Modal' : 'Show Modal'}
            </button>
            <h1>Hello Modal!</h1>
            <UncontrolledOnboardingFlow 
            onFinish={data => {
                console.log(data);
                alert('Onboarding Complete!')
            }}>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledOnboardingFlow>
        </>
    )
}
export default App;
