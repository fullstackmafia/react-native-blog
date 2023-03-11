import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.TextLabel}>Enter Title:</Text>
            <TextInput 
              style={styles.TextInput} 
              value={title} 
              onChangeText={text => setTitle(text)} 
            />
            <Text style={styles.TextLabel}>Enter Content:</Text>
            <TextInput 
              style={styles.TextInput} 
              value={content} 
              onChangeText={text => setContent(text)} />
            <Button
                title='Save Blog Post'
                onPress={() => {onSubmit(title, content)}}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    TextInput: {
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        margin: 5
    },
    TextLabel: {
        fontSize: 20,
        margin: 5
    }

})

export default BlogPostForm;