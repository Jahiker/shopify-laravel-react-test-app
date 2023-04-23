import { useState } from "react";
import { useAppQuery } from "../hooks";
import {
    IndexTable,
    // LegacyCard,
    Card,
    Page,
    useIndexResourceState,
    // Text,
    Badge,
} from "@shopify/polaris";

export const OrdersTable = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const { data } = useAppQuery({
        url: "/api/products",
        reactQueryOptions: {
            onSuccess: (response) => {
                console.log(response);
                setProducts(response.products);
                setisLoading(false);
            },
        },
    });

    // const products = [
    //     {
    //         id: "1020",
    //         order: "#1020",
    //         date: "Jul 20 at 4:34pm",
    //         customer: "Jaydon Stanton",
    //         total: "$969.44",
    //         paymentStatus: <Badge progress="complete">Paid</Badge>,
    //         fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    //     },
    //     {
    //         id: "1019",
    //         order: "#1019",
    //         date: "Jul 20 at 3:46pm",
    //         customer: "Ruben Westerfelt",
    //         total: "$701.19",
    //         paymentStatus: (
    //             <Badge progress="partiallyComplete">Partially paid</Badge>
    //         ),
    //         fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    //     },
    //     {
    //         id: "1018",
    //         order: "#1018",
    //         date: "Jul 20 at 3.44pm",
    //         customer: "Leo Carder",
    //         total: "$798.24",
    //         paymentStatus: <Badge progress="complete">Paid</Badge>,
    //         fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    //     },
    // ];

    const resourceName = {
        singular: "product",
        plural: "products",
    };

    const { selectedResources, allResourcesSelected, handleSelectionChange } =
        useIndexResourceState(products);

    const rowMarkup = products.map(
        (
            { id, title, created_at, body_html, product_type, status, vendor },
            index
        ) => (
            <IndexTable.Row
                id={id}
                key={id}
                selected={selectedResources.includes(id)}
                position={index}
            >
                <IndexTable.Cell>
                    <p variant="bodyMd" fontWeight="bold" as="span">
                        {title}
                    </p>
                </IndexTable.Cell>
                <IndexTable.Cell>{created_at}</IndexTable.Cell>
                <IndexTable.Cell>{body_html}</IndexTable.Cell>
                <IndexTable.Cell>{product_type}</IndexTable.Cell>
                <IndexTable.Cell>{status}</IndexTable.Cell>
                <IndexTable.Cell>{vendor}</IndexTable.Cell>
            </IndexTable.Row>
        )
    );

    return (
        <div>
            <h1>OrdersTable</h1>

            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <Page>
                    <IndexTable
                        resourceName={resourceName}
                        itemCount={products.length}
                        selectedItemsCount={
                            allResourcesSelected
                                ? "All"
                                : selectedResources.length
                        }
                        onSelectionChange={handleSelectionChange}
                        headings={[
                            { title: "Product" },
                            { title: "Date" },
                            { title: "Description" },
                            { title: "Type", alignment: "end" },
                            { title: "Status" },
                            { title: "Vendor" },
                        ]}
                    >
                        {rowMarkup}
                    </IndexTable>
                </Page>
            )}
        </div>
    );
};
