import { useState } from "react"
import { Button, Form } from "semantic-ui-react"
export default function MakeAnOutfit() {

    return (
        <>
            <div className="add-shirt-container">
                <Button >
                    Add Shirt
                </Button>
                <Form>
                    <Form.Field width={4}>
                        <input placeholder='Image URL...' />
                        <input placeholder='Clothing Name...' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
            <div className="add-pants-container">
                <Button >
                    Add Pants
                </Button>
                <Form>
                    <Form.Field width={4}>
                        <input placeholder='Image URL...' />
                        <input placeholder='Clothing Name...' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        </>
    )
}
