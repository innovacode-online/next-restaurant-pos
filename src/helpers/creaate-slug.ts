export const createSlug = ( text: string ) => {

    const slug = text
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .slice(0, 50)

    return slug;
}