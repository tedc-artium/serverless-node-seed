describe('test event based architecture', () => {
    it('should write given message to S3', async () => {
        /*
            1. Import lambda and invoke
            2. Wait some amount of time
            3. Read expected file from S3
            4. Compare message
        */
        const expectedMessage = "SQUARE PIZZA FTW";
        fetch(`localhost:4000/test`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: expectedMessage
        });
        await new Promise(resolve => setTimeout(resolve, 1000));

    });
})