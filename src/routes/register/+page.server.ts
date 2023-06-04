export const actions = {
    register: async ({ request, cookies }) => {
        const formData = await request.formData();
        
        console.log(formData.get('username'));
        console.log(formData.get('petname'));
        console.log(formData.get('pettype'));
        

        return {
            success: true
        };
    }
};