import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"

import React from 'react'

const BaseCard = ({
    title,
    children
}: {
    title?: string,
    children: React.ReactNode
}) => {
    return (

        <div className="w-full">
            <Card className="">
                {title &&
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <h1 className="text-2xl">{title}</h1>
                        </div>
                    </CardHeader>
                }
                <CardBody>
                    {children}
                </CardBody>
                {/* <CardFooter>
                    <Button type="submit" color='primary'
                        variant={variant}
                        isLoading={isLoading}
                        disableRipple
                    >
                        {label}
                    </Button>
                </CardFooter> */}
            </Card>
        </div >
    )
}

export default BaseCard