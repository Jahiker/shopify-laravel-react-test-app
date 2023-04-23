import { useState } from "react";
import { Card, Page, Button } from "@shopify/polaris";

const TestPage = () => {
    const [counter, setCounter] = useState(0);
    return (
        <Page>
            <Card sectioned>
                TestPage
                <hr />
                <Button onClick={() => setCounter(counter + 1)}>
                    Counter: {counter}
                </Button>
            </Card>
        </Page>
    );
};

export default TestPage;
