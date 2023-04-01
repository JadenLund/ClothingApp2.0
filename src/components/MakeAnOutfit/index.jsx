import './index.scss'
import { useState } from "react"
import { Button, Form, Icon } from "semantic-ui-react"
import Shirts from "./Shirts"
import Pants from "./Pants"
export default function MakeAnOutfit() {
    const [showShirtForm, setShowShirtForm] = useState(true)
    const [showPantsForm, setShowPantsForm] = useState(true)

    const handleShirtFormClick = () => {
        setShowShirtForm(!showShirtForm);
    }
    const handlePantsFormClick = () => {
        setShowPantsForm(!showPantsForm);
    }
    return (
        <>
            <div className="shirt-container">
                <div className="add-shirt-container">
                    <Button onClick={handleShirtFormClick}>
                        {showShirtForm ? 'Add Shirt' : 'Hide Form'}
                    </Button>
                    {showShirtForm ? null : <Form>
                        <Form.Field width={4}>
                            <input placeholder='Image URL...' />
                            <input placeholder='Clothing Name...' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>}
                </div>
                <Shirts />
            </div>
            <div className="pants-container">
                <div className="add-pants-container">
                    <Button onClick={handlePantsFormClick}>
                        {showPantsForm ? 'Add Pants' : 'Hide Form'}
                    </Button>
                    {showPantsForm ? null : <Form>
                        <Form.Field width={4}>
                            <input placeholder='Image URL...' />
                            <input placeholder='Clothing Name...' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>}
                </div>
                <Pants />
            </div>
        </>
    )
}
