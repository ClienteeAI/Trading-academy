with open('c:/Users/pleva/OneDrive/Desktop/Antigravity/trading academy showcase web page/src/data/blogPostsData.ts', 'r', encoding='utf-8') as f:
    text = f.read()
    print(f'Opens: {text.count("{")}')
    print(f'Closes: {text.count("}")}')
