<script>
    import { Doc } from 'sveltefire'
    import { db } from '$lib/config'
</script>

<h1 class="flex justify-center">Home Page</h1>
<container class="flex justify-center">
    <Doc firestore={db} ref="users/bTLxuamTs3bApk2lIS7K" let:data let:ref>
        {data.name}
        {ref.path}
    </Doc>
</container>

