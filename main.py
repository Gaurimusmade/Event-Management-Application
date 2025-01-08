from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import re
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run in headless mode, if needed
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# Initialize the Chrome WebDriver with the options
driver = webdriver.Chrome(options=chrome_options)

# Assert the browser name from the capabilities
assert driver.capabilities['browserName'] == 'chrome'

# Optionally, assert the browser version
assert driver.capabilities['browserVersion'] == '131.0.6778.264'  # Replace with your actual Chrome version

# Visit the desired URL
driver.get("http://localhost:5173/")

# Perform any necessary actions on the page, e.g., interacting with elements
# driver.quit() # Don't forget to quit the driver after the test to close the browser


# Log in
input_element = driver.find_element(By.CLASS_NAME, 'input_field1')
input_element.send_keys("Markytics@32")
time.sleep(5)
input_element_password = driver.find_element(By.CLASS_NAME, 'password_input_field_eye_adjustment')
input_element_password.send_keys("Password@123" + Keys.ENTER)
time.sleep(5)

# Verify Presence of Daywise Engagement Section
daywise_engagement_heading = driver.find_element(By.XPATH, '//div[contains(text(), "Daywise Engagement")]')
assert daywise_engagement_heading.is_displayed(), "Daywise Engagement section is not visible."

# Verify Scrolling in the Daywise Engagement Section
scrollable_container = driver.find_element(By.XPATH, '//div[@style="overflow-x: scroll; white-space: nowrap;"]')
driver.execute_script("arguments[0].scrollLeft = arguments[0].scrollWidth", scrollable_container)
time.sleep(2)

# Verify Number of Cards Rendered
daywise_engagement_div = driver.find_element(By.CLASS_NAME, 'daywiseEngagement')
cards = daywise_engagement_div.find_elements(By.CLASS_NAME, 'card-body1')
print(f"Number of cards found: {len(cards)}")
assert len(cards) == 7, f"Expected 7 cards but found {len(cards)}"

# Iterate through each card and extract the content

for index, card in enumerate(cards):
    assert card.find_element(By.CLASS_NAME, 'Heading1'), f"Card {index + 1} missing Heading1"
    values = card.find_elements(By.CLASS_NAME, 'value1')
    assert len(values) == 3, f"Card {index + 1} missing one or more value1 elements"


for index, card in enumerate(cards):
    # Validate date format
    date = card.find_element(By.CLASS_NAME, 'Heading1').find_element(By.TAG_NAME, 'span').text
    assert re.match(r"\d{2}/\d{2}/\d{4}", date), f"Invalid date format in card {index + 1}: {date}"
    
    # Validate numerical values
    values = card.find_elements(By.CLASS_NAME, 'value1')
    for value in values:
        num = value.text.split('-')[-1].strip()  
        assert num.isdigit(), f"Invalid numeric value in card {index + 1}: {value.text}"

for index, card in enumerate(cards):
    print(f"\nCard {index + 1}:")
    
    # Extracting the date
    heading_div = card.find_element(By.CLASS_NAME, 'Heading1')
    date = heading_div.find_element(By.TAG_NAME, 'span').text
    print(f"  Date: {date}")
    
    # Extracting WhatsApp Total
    whatsapp_total = card.find_elements(By.CLASS_NAME, 'value1')[0].text
    print(f"  {whatsapp_total}")
    
    # Extracting AI Calls Total
    ai_calls_total = card.find_elements(By.CLASS_NAME, 'value1')[1].text
    print(f"  {ai_calls_total}")
    
    # Extracting Blaster Calls Total
    blaster_calls_total = card.find_elements(By.CLASS_NAME, 'value1')[2].text
    print(f"  {blaster_calls_total}")


for index in range(len(cards)):
    print(f"Clicking card {index + 1}")
    # Wait for the card to be clickable
    WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, 'card-body1'))
    )

    # Re-fetch parent container and cards
    daywise_engagement_div = driver.find_element(By.CLASS_NAME, 'daywiseEngagement')
    cards = daywise_engagement_div.find_elements(By.CLASS_NAME, 'card-body1')

    cards[index].click()
    time.sleep(5) 


# Last Collection Card 


card = driver.find_element(By.CLASS_NAME, 'lastCollectionDiv')

# Verify card structure
assert card.find_element(By.CLASS_NAME, 'details'), "Details section missing in the card."
values = card.find_elements(By.CLASS_NAME, 'value1')
assert len(values) == 2, "Expected 2 value1 elements but found different count."

print("Card structure verified.")

time.sleep(5)

# Close the browser
driver.close()


