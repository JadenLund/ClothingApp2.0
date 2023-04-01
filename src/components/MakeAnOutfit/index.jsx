import { useState } from "react"
import { Button, Form } from "semantic-ui-react"
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
            <div className="add-shirt-container">
                <Button onClick={handleShirtFormClick}>
                    Add Shirt
                </Button>
                {showShirtForm ? null : <Form>
                    <Form.Field width={4}>
                        <input placeholder='Image URL...' />
                        <input placeholder='Clothing Name...' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>}

            </div>
            <div className="add-pants-container">
                <Button onClick={handlePantsFormClick}>
                    Add Pants
                </Button>
                {showPantsForm ? null : <Form>
                    <Form.Field width={4}>
                        <input placeholder='Image URL...' />
                        <input placeholder='Clothing Name...' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>}
            </div>
        </>
    )
}
