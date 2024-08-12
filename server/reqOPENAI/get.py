from openai import OpenAI

client = OpenAI(
    # This is the default and can be omitted
    api_key="YOUR_OPENAI_API_KEY"
)

def getVector(text):
    response = client.embeddings.create(
        input=text, 
        model="text-embedding-ada-002"
    )

    vector = response.data[0].embedding[:256]
    return vector