#https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/cf57fe3a-b58d-4d7c-8eea-2f63ed24bdfb
#XrO8Ho2oPsPUfYNbkqpMr4ldrp0ClGQs4GnP2Z0xolvp
import json
from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson.natural_language_understanding_v1 import Features, CategoriesOptions, ConceptsOptions, RelationsOptions

authenticator = IAMAuthenticator('XrO8Ho2oPsPUfYNbkqpMr4ldrp0ClGQs4GnP2Z0xolvp')
natural_language_understanding = NaturalLanguageUnderstandingV1(
    version='2020-08-01',
    authenticator=authenticator
)

natural_language_understanding.set_service_url('https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/cf57fe3a-b58d-4d7c-8eea-2f63ed24bdfb')

response = natural_language_understanding.analyze(
    url='https://www.theatlantic.com/technology/archive/2019/02/how-much-factchecking-worth-facebook/581899/',
    features=Features(relations=RelationsOptions())).get_result()

print(json.dumps(response, indent=2))