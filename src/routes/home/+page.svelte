<script>
    import { Doc } from 'sveltefire'
    import { db } from '$lib/config'
</script>

<Doc firestore={db} ref="users/bTLxuamTs3bApk2lIS7K" let:data let:ref>
    {data.name}
    {ref.path}
</Doc>